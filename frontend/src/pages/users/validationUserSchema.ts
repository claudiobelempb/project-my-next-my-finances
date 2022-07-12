import * as Yup from 'yup';

import { FIELD_REQUERED, FIELD_CPF_REQUERED, FIELD_DATE_REQUERED, FIELD_EMAIL_REQUERED } from '../../app/contants';

export const validUserSchema = Yup.object().shape({
  lastName: FIELD_REQUERED,
  firstName: FIELD_REQUERED,
  birth: FIELD_DATE_REQUERED,
  cpf: FIELD_CPF_REQUERED,
  email: FIELD_EMAIL_REQUERED,
  address: FIELD_REQUERED,
  telephone: FIELD_REQUERED,
});
