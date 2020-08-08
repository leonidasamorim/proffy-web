import React from "react";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import "./styles.css";

import warningIcoin from "../../assets/images/icons/warning.svg";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulario de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />

          <TextArea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a Aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "História", label: "História" },
              { value: "Química", label: "Química" },
            ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button">+ Novo horário</button>
          </legend>

          <div className="schedule-item">
            <Select
              name="week_day"
              label="Dia da Semana"
              options={[
                { value: "0", label: "Domingo" },
                { value: "1", label: "Segunda-Feira" },
                { value: "2", label: "Terça-Feira" },
                { value: "3", label: "Quarta-Feira" },
                { value: "4", label: "Quinta-Feira" },
                { value: "5", label: "Sexta-Feira" },
                { value: "6", label: "Sábado" },
              ]}
            />

          <Input name="from" label="Das" type="time" />
          <Input name="to" label="Até"  type="time"/>
          </div>
        </fieldset>

        <footer>
          <p>
            <img src={warningIcoin} alt="Aviso Importante" className="src" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
