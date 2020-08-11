import React from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que Incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulario."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>

                    <Textarea name="bio" label="Biografia"/>
                    

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula </legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Matematica', label: 'Matematica'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'Historia', label: 'Historia'},
                            {value: 'Geometria', label: 'Geometria'}
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Horarios disponiveis
                    <button type="button">
                        +novo horario
                    </button>
                    </legend>
                    <div className="schedule-item">
                        <Select
                            name="week_day"
                            label="Dia da semana"
                            options={[
                                {value: '0', label: 'Domingo'},
                                {value: '1', label: 'Segunda'},
                                {value: '2', label: 'Terça'},
                                {value: '3', label: 'Quarta'},
                                {value: '4', label: 'Quinta'},
                                {value: '5', label: 'Sexta'},
                                {value: '6', label: 'Sabado'}
                            ]}
                        />

                        <Input name="from" label="Das" type="time"/>
                        <Input name="to" label="Até" type="time"/>
                    </div>
                    
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>
                        Preencha todos os dados corretamente
                    </p>

                    <button type="button" >Salvar cadastro</button>
                </footer>

            </main>
        </div>
    )
}

export default TeacherForm;