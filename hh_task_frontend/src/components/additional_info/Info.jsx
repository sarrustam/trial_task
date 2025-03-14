import './info.css';

function Info(){

    async function consult(){
        alert("Fill the form to apply for one");
    }

    return(
        <section className="info">
            <div className="info__title">
                <p>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</p>
            </div>
            
            <div className="info__content">
                <div className="info__cards">
                    <div className="info__card">
                        <div className="info__card__content">
                            <div className="info__cards__intro">
                                <div className="info__card__intro duration">
                                    <p>2 месяца</p>
                                </div>

                                <div className="info__card__intro type">
                                    <p>Стажировка</p>
                                </div>
                            </div>

                            <div className="info__card__additional">
                                <p>Дополнительно</p>
                                <img src="\src\assets\Frame 19.svg" alt="" />
                            </div>

                            <div className="info__card__title">
                                <p>Frontend: ReactJS</p>
                            </div>

                            <div className="info__card__subtitle">
                                <p>Ваш путь в IT начинается с нами, после выполнения этого тестового задания</p>
                            </div>

                            <div className="info__card__footer">
                                    <img src="\src\assets\Frame 52.svg" alt="" />
                                    <div className="info__card__price">
                                        <div className="info__card__price__product">
                                            <p>Стоимость какого-то продукта</p>
                                        </div>

                                        <div className="info__card__price__product__price">
                                            <p>11 111 <span>тг.</span></p>
                                        </div>
                                    </div>
                                    <button className="info__card_footer__sign__btn" onClick={consult}>
                                        Записаться
                                    </button>
                            </div>
                        </div>
                    </div>

                    <div className="info__card">
                        <div className="info__card__content">
                            <div className="info__cards__intro">
                                <div className="info__card__intro duration">
                                    <p>2 месяца</p>
                                </div>

                                <div className="info__card__intro type">
                                    <p>Стажировка</p>
                                </div>
                            </div>

                            <div className="info__card__additional">
                                <p>Дополнительно</p>
                                <img src="\src\assets\Frame 19.svg" alt="" />
                            </div>

                            <div className="info__card__title">
                                <p>Backend: PHP (Symfony/Laravel)</p>
                            </div>

                            <div className="info__card__subtitle">
                                <p>У нас всегда есть много задач по PHP, мы хотим видеть FullStack-ов в нашей команде</p>
                            </div>

                            <div className="info__card__footer">
                                    <img src="\src\assets\Frame 52.svg" alt="" />
                                    <div className="info__card__price">
                                        <div className="info__card__price__product">
                                            <p>Стоимость какого-то продукта</p>
                                        </div>

                                        <div className="info__card__price__product__price">
                                            <p>11 222 <span>тг.</span></p>
                                        </div>
                                    </div>
                                    <button className="info__card_footer__sign__btn" onClick={consult}>
                                        Записаться
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Info;