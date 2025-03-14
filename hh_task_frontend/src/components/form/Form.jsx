import './form.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function Form(){

    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        (async () => await Load()) ();
    }, []);

    async function Load() {
        const result = await axios.get("http://127.0.0.1:8000/api/application");
        setApplications(result.data);
        console.log(result.data);
    }

    async function save(event) {
        event.preventDefault();
            try{
                await axios.post("http://127.0.0.1:8000/api/application",
                    {
                        name: name,
                        phone: phone
                    }
                );

                alert("Application submitted successfully!!!");
                setId("");
                setName("");
                setPhone("");
                Load();
            }

            catch(err){
                alert("Application submission failed!!!");
            }
    }

    async function congrats(){
        alert("Congrutulations!!!");
    }

    async function consult(){
        alert("Fill the form to apply for one");
    }

    return(
        <section className="card">
                <div className="card__content">
                    <div className="card__text">
                        <div className="card__title">
                            <p>ТЕСТОВОЕ ЗАДАНИЕ</p>
                        </div>
                       
                        <div className="card__subtitle">
                            <p>ВЫПОЛНИТЕ ВЕРСТКУ КОМПОНЕНТА</p>
                        </div>

                        <div className="card__list">
                            <div className="card__list card__list_item">
                                <img src="\src\assets\Frame 47.svg" alt="" />
                                <p>Используйте BEM, React контекст провайдеры, MVVM и CleanArchitecture</p>
                            </div>

                            <div className="card__list card__list_item">
                                <img src="\src\assets\Frame 48.svg" alt="" />   
                                <p>Flex и Grid системы верстки</p>
                            </div>
                        </div>
                        
                        <div className="card__paragraph">
                            <p>Будем рады видеть вас в нашей команде :)</p>
                        </div>
                        
                        <div className="card__buttons">
                            <button className="card__button btn__done" onClick={congrats}>
                                Я все выполнил !
                            </button>

                            <button className="card__button btn__consult" onClick={consult}>
                                Получить консультацию
                            </button>
                        </div>
                    </div>

                    <div className="card__form">
                        <div className="card__form__title">
                            <p>ТЕСТОВАЯ ФОРМА ДЛЯ ПОДАЧИ ЗАЯВКИ</p>
                        </div>

                        <div className="card__form__submit">
                            <input type="text" id="applicationId" hidden
                                value={id}
                                onChange={(event) =>{
                                    setId(event.target.value);
                                }}
                            />
                            <input type="text" placeholder='Имя' id="applicantName"
                                value={name}
                                onChange={(event) =>{
                                    setName(event.target.value);
                                }}
                            />
                            <input type="text" placeholder='Телефон' id="applicantPhone"
                                value={phone}
                                onChange={(event) =>{
                                    setPhone(event.target.value);
                                }}
                            />
                            <button onClick={save}>Записаться</button>
                        </div>
                    </div>
                </div>
        </section>
    );
}

export default Form;