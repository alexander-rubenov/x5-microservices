var express = require("express")
var app = express()

var server = require('http').createServer(app)

const departments = [
  {
    id: 'c4ca4238a0b923820dcc509a6f75849b',
    name: 'Финансовый департамент',
    microservices: [
      {
        name: 'Финансовая диагностика',
        status: 'в разработке',
        currentVersion: '15.2.6',
        description: 'Диагностика предприятия-партнера по объединению',
        tags: ['диагностика', 'предприятие', 'финансы', 'партнеры'],
        developers: [
          {
            name: 'Иванов Иван Иванович',
            phone: '+79093578543',
            email: 'ivanov@gmail.com'
          }
        ],
      },
      {
        name: 'Контроль реализации',
        status: 'тестируется',
        currentVersion: '4.5.7',
        description: 'Контроль реализации мероприятий финансового раздела программы объединения',
        tags: ['контроль', 'мероприятие', 'объединение'],
        developers: [
          {
            name: 'Петров Петр Петрович',
            phone: '+79992851954',
            email: 'petrov@gmail.com'
          },
          {
            name: '',
            status: '',
            currentVersion: '',
            description: '',
            tags: [],
            developers: [
              {
                phone: '',
                email: ''
              }
            ],
          }
        ],
      }
    ]
  },
  {
    id: 'c81e728d9d4c2f636f067f89cc14862c',
    name: 'Стратегический департамент',
    microservices: [
      {
        name: 'Финансовая диагностика',
        status: 'в разработке',
        current_version: '15.2.6',
        description: 'Диагностика предприятия-партнера по объединению',
        tags: ['диагностика', 'предприятие', 'финансы', 'партнеры'],
        developers: [
          {
            name: 'Иванов Иван Иванович',
            phone: '+79093578543',
            email: 'ivanov@gmail.com'
          }
        ],
      },
      {
        name: 'Контроль реализации',
        status: 'тестируется',
        current_version: '4.5.7',
        description: 'Контроль реализации мероприятий финансового раздела программы объединения',
        tags: ['контроль', 'мероприятие', 'объединение'],
        developers: [
          {
            name: 'Петров Петр Петрович',
            phone: '+79992851954',
            email: 'petrov@gmail.com'
          },
        ],
      },
      {
        name: 'Формы финансирования',
        status: 'в разработке',
        current_version: '12.3.2',
        description: 'Выбор формы финансирования процесса',
        tags: ['процесс', 'финансирование', 'форма'],
        developers: [
          {
            name: 'Цапок Надежда Алексеевна',
            phone: '+79096541278',
            email: 'tsapok@gmail.com'
          }
        ],
      }
    ]
  },
  {
    id: 'eccbc87e4b5ce2fe28308fd9f2a7baf3',
    name: 'Департамент IT',
    microservices: [
      {
        name: 'Финансовая диагностика',
        status: 'в разработке',
        current_version: '15.2.6',
        description: 'Диагностика предприятия-партнера по объединению',
        tags: ['диагностика', 'предприятие', 'финансы', 'партнеры'],
        developers: [
          {
            name: 'Иванов Иван Иванович',
            phone: '+79093578543',
            email: 'ivanov@gmail.com'
          }
        ],
      },
      {
        name: 'Контроль реализации',
        status: 'тестируется',
        current_version: '4.5.7',
        description: 'Контроль реализации мероприятий финансового раздела программы объединения',
        tags: ['контроль', 'мероприятие', 'объединение'],
        developers: [
          {
            name: 'Петров Петр Петрович',
            phone: '+79992851954',
            email: 'petrov@gmail.com'
          },
          {
            name: 'Формы финансирования',
            status: 'в разработке',
            current_version: '12.3.2',
            description: 'Выбор формы финансирования процесса',
            tags: ['процесс', 'финансирование', 'форма'],
            developers: [
              {
                name: 'Цапок Надежда Алексеевна',
                phone: '+79096541278',
                email: 'tsapok@gmail.com'
              }
            ],
          }
        ],
      }
    ]
  },
  {
    id: 'a87ff679a2f3e71d9181a67b7542122c',
    name: 'Департамент бизнес-процессов',
    microservices: [
      {
        name: 'Финансовая диагностика',
        status: 'в разработке',
        current_version: '15.2.6',
        description: 'Диагностика предприятия-партнера по объединению',
        tags: ['диагностика', 'предприятие', 'финансы', 'партнеры'],
        developers: [
          {
            name: 'Иванов Иван Иванович',
            phone: '+79093578543',
            email: 'ivanov@gmail.com'
          }
        ],
      },
      {
        name: 'Контроль реализации',
        status: 'тестируется',
        current_version: '4.5.7',
        description: 'Контроль реализации мероприятий финансового раздела программы объединения',
        tags: ['контроль', 'мероприятие', 'объединение'],
        developers: [
          {
            name: 'Петров Петр Петрович',
            phone: '+79992851954',
            email: 'petrov@gmail.com'
          },
          {
            name: 'Формы финансирования',
            status: 'в разработке',
            current_version: '12.3.2',
            description: 'Выбор формы финансирования процесса',
            tags: ['процесс', 'финансирование', 'форма'],
            developers: [
              {
                name: 'Цапок Надежда Алексеевна',
                phone: '+79096541278',
                email: 'tsapok@gmail.com'
              }
            ],
          }
        ],
      }
    ]
  },
  {
    id: 'e4da3b7fbbce2345d7772b0674a318d5',
    name: 'Департамент коммуникаций',
    microservices: [
      {
        name: 'Финансовая диагностика',
        status: 'в разработке',
        current_version: '15.2.6',
        description: 'Диагностика предприятия-партнера по объединению',
        tags: ['диагностика', 'предприятие', 'финансы', 'партнеры'],
        developers: [
          {
            name: 'Иванов Иван Иванович',
            phone: '+79093578543',
            email: 'ivanov@gmail.com'
          }
        ],
      },
      {
        name: 'Контроль реализации',
        status: 'тестируется',
        current_version: '4.5.7',
        description: 'Контроль реализации мероприятий финансового раздела программы объединения',
        tags: ['контроль', 'мероприятие', 'объединение'],
        developers: [
          {
            name: 'Петров Петр Петрович',
            phone: '+79992851954',
            email: 'petrov@gmail.com'
          },
          {
            name: 'Формы финансирования',
            status: 'в разработке',
            current_version: '12.3.2',
            description: 'Выбор формы финансирования процесса',
            tags: ['процесс', 'финансирование', 'форма'],
            developers: [
              {
                name: 'Цапок Надежда Алексеевна',
                phone: '+79096541278',
                email: 'tsapok@gmail.com'
              }
            ],
          }
        ],
      }
    ]
  },
]

app.get("/departments", function (req, res) {
  res.send(departments)

})

app.use(require('body-parser').urlencoded({
  extended: true
}))

app.post("/form", function (req, res) {

  if (req.body) {
    departments.forEach(element => {
      if (element.id === req.body.id) {
        element.microservices.push(req.body.microservice);
      }
    });
  }
})

app.listen(3000);
