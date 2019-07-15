const dotenv = require('dotenv');
const chalk = require('chalk');
const faker = require('faker');
const fs = require('fs');
const Joi = require('joi');

dotenv.config();

const populate = () => {
  try {
    const {
      AuthorsNum,
      publicationsPerAuthorMin,
      publicationsPerAuthorMax
    } = validateEnvVars(process.env);

    const authors = [];
    const publications = [];

    for (let i = 0; i < AuthorsNum; i++) {
      let author = generateAuthor();
      authors.push(author);

      let publicationsPerAuthor = faker.random.number({
        min: publicationsPerAuthorMin,
        max: publicationsPerAuthorMax
      });

      for (let i = 0; i < publicationsPerAuthor; i++) {
        const publication = generatePublication(author.id);

        publications.push(publication)
      }
    }

    const obj = {authors, publications};
    const data = JSON.stringify(obj, null, 4);

    fs.writeFileSync('./db-v1.json', data, 'utf-8');

    console.log(chalk.blue('Populate successes'));
    process.exit(0)
  } catch (error) {
    console.log(chalk.red('Populate error'));
    console.log(error);
    process.exit(1);
  }
};

const validateEnvVars = (env) => {
  const validationSchema = Joi.object().keys({
    AuthorsNum: Joi
      .number()
      .integer()
      .positive()
      .required(),
    publicationsPerAuthorMin: Joi
      .number()
      .integer()
      .positive()
      .required(),
    publicationsPerAuthorMax: Joi
      .number()
      .integer()
      .positive()
      .min(Joi.ref('publicationsPerAuthorMin'))
      .required()
  });

  const validationOptions = {
    abortEarly: false,
    stripUnknown: true
  };

  const {
    error,
    value
  } = Joi.validate(env, validationSchema, validationOptions)

  if (error) {
    console.log(chalk.red('Validation error'));
    throw error
  }

  return value
};

const generateAuthor = () => {
  // variables to generate email
  let randomNumber = faker.random.number({min: 89, max: 99});
  let emailDomain = `@${faker.internet.domainWord()}.com`;

  // author publicationPage
  let id = faker.random.uuid().substring(0, 5);
  let firstName = faker.name.firstName();
  let lastName = faker.name.lastName();
  let email = `${firstName}${lastName}${randomNumber}${emailDomain}`;
  let avatar = faker.internet.avatar();
  let jobTitle = faker.name.jobTitle();
  let paragraph = faker.lorem.paragraph();

  return {
    id,
    firstName,
    lastName,
    email,
    avatar,
    jobTitle,
    paragraph
  };
};

const generatePublication = (authorId) => {
  let id = faker.random.uuid().substring(0, 5);
  let title = faker.lorem.sentence();
  let description = `${faker.lorem.paragraphs()}\n\n${faker.lorem.paragraphs()}`;
  let date = faker.date.between('2015-01-01', new Date());
  let imageUrl = generateRandomImage();


  return {
    id,
    authorId,
    title,
    description,
    date,
    imageUrl
  };
};

const generateRandomImage = () => {
  let randomNum = faker.random.number({min: 1, max: 12});
  let image;

  switch (randomNum) {
    case 1:
      image = faker.image.abstract();
      break;
    case 2:
      image = faker.image.animals();
      break;
    case 3:
      image = faker.image.business();
      break;
    case 4:
      image = faker.image.cats();
      break;
    case 5:
      image = faker.image.city();
      break;
    case 6:
      image = faker.image.food();
      break;
    case 7:
      image = faker.image.nightlife();
      break;
    case 8:
      image = faker.image.fashion();
      break;
    case 9:
      image = faker.image.people();
      break;
    case 10:
      image = faker.image.nature();
      break;
    case 11:
      image = faker.image.transport();
      break;
    case 12:
      image = faker.image.technics();
      break;
  }

  return image
};

populate();
