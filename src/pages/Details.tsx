import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Button } from '../components/UI/Button';
import Info from '../components/Info';

const Details = () => {
  const { name } = useParams();
  let navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data));
  }, [name]);
  if (!country) {
    return <h1 style={{ fontSize: '50px', textAlign: 'center' }}>Loading...</h1>;
  }
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> To back
      </Button>
      <Info {...country![0]} />
    </div>
  );
};

export default Details;
