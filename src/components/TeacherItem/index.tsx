import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import avatarLogo from "../../assets/images/avatar.png";

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
          <img src={avatarLogo} alt="Avatar Logo" />
          <div>
            <strong>Professor Teste</strong>
            <span>Engenharia Quântica</span>
          </div>
        </header>
        <p>
          É um fato conhecido de todos que um leitor se distrairá com o
          conteúdo de texto legível de uma página quando estiver examinando
          sua diagramação. <br/><br/>  A vantagem de usar Lorem Ipsum é que ele tem uma
          distribuição normal de letras, ao contrário de "Conteúdo aqui,
          conteúdo aqui", fazendo com que ele tenha uma aparência similar a de
          um texto legível.
        </p>

        <footer>
          <p>
            Preço/Hora:
            <strong>R$ 120,00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="Entre em contato" />
            Entrar em contato
          </button>
        </footer>
      </article>
    );
}

export default TeacherItem;