import Stars from './components/Stars/Stars';
import Listing from './components/Listing/Listing';
import data from './components/Listing/data/etsy.json';
import MessageHistory from './components/MessageHistory/MessageHistory';
import messages from './components/MessageHistory/data';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>3. Домашнее задание к лекции «Props»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>3.1 Рейтинг фильмов</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task2'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body'}>
            <Stars count={1} />
            <Stars count={2} />
            <Stars count={3} />
            <Stars count={4} />
            <Stars count={5} />
            <Stars />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>3.2 Список предложений</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>previous task</span>
                </a>
              </div>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task3'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task2'}>
            <Listing items={data} />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task3'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>3.3 История сообщений в чате*</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>home task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task3'}>
            <div className="clearfix container">
              <div className="chat">
                <div className="chat-history">
                  <MessageHistory list={messages} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
