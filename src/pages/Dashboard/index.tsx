import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
// import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  // const [repositories, setRepositories] = useState([]);

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repósitorios no GitHub.</Title>
      <Form>
        <input placeholder="Digite aqui o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="#">
          <img
            src="https://avatars3.githubusercontent.com/u/65988709?s=460&u=9098f72cbe2b2a29545289c89c82e37e650bc5d4&v=4"
            alt="Victor Leonardo"
          />
          <div>
            <strong>nlw-ecoleta</strong>
            <p>
              Projeto construído durante o Next Level Week #01 da Rocketseat
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
