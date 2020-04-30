import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisa</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40443311?s=460&u=f62704fb7a77ceafbcc2b194ff46ff62c3f5beaa&v=4"
            alt="Profile"
          />
          <div>
            <strong>mleitejunior/code-team-sup</strong>
            <p>
              Turma de estudos de Java para competição - Nível Ensino Superior -
              IFSULDEMINAS - Campus Machado. Focada principalmente em
              URIONLINEJUDGE.
            </p>
          </div>

          <FiChevronRight size={30} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40443311?s=460&u=f62704fb7a77ceafbcc2b194ff46ff62c3f5beaa&v=4"
            alt="Profile"
          />
          <div>
            <strong>mleitejunior/code-team-sup</strong>
            <p>
              Turma de estudos de Java para competição - Nível Ensino Superior -
              IFSULDEMINAS - Campus Machado. Focada principalmente em
              URIONLINEJUDGE.
            </p>
          </div>

          <FiChevronRight size={30} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/40443311?s=460&u=f62704fb7a77ceafbcc2b194ff46ff62c3f5beaa&v=4"
            alt="Profile"
          />
          <div>
            <strong>mleitejunior/code-team-sup</strong>
            <p>
              Turma de estudos de Java para competição - Nível Ensino Superior -
              IFSULDEMINAS - Campus Machado. Focada principalmente em
              URIONLINEJUDGE.
            </p>
          </div>

          <FiChevronRight size={30} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
