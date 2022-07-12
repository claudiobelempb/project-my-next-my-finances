import { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';

import { LayoutDashboard } from '@/components/LayoutDashboard';
import { MainHeaderDashboard } from '@/components/LayoutDashboard/MainHeaderDashboard';

import { User } from '@/types/user/User';
import { FaChevronLeft } from 'react-icons/fa';
import { InputDefault } from '@/common/InputDefault';
import { ButtonDefault } from '@/common/ButtonDefault';
import { maskCpf, maskDateBirth, maskPhone } from 'app/utils/mask';
import { useCreateUserService } from '@/services/user/create.service';
import { useUpdateUserService } from '@/services/user/update.service';
import { validUserSchema } from '../validationUserSchema';

type CreateUserPageProps = {
  user: User;
  onSubmit: (user: User) => void;
};

const CreateUserPage: React.FC = () => {
  const [user, setUser] = useState<User>({});

  const formScheme: User = {
    id: '',
    lastName: '',
    firstName: '',
    birth: '',
    cpf: '',
    email: '',
    address: '',
    password: '',
    telephone: '',
    createdAt: '',
  };

  const onSubmit = (user: User) => {
    if (user.id) {
      useUpdateUserService(user.id, user);

      // toast.success('User create com success!');
    } else {
      useCreateUserService(user);
      setUser({});
      // console.log('User: ', user);
      // console.log('User Formik: ', user);
    }
  };

  const formik = useFormik<User>({
    initialValues: { ...formScheme, ...user },
    onSubmit,
    validationSchema: validUserSchema,
  });

  return (
    <LayoutDashboard title="Create User">
      <MainHeaderDashboard title="Create User" />
      <Link href="/users">
        <a className="btn btn-primary text-white mb-2">
          <FaChevronLeft />
        </a>
      </Link>
      <h2 className="text-secondary">Created User</h2>
      <form onSubmit={formik.handleSubmit} className="needs-validation">
        <div className="row text-secondary">
          <InputDefault
            type="text"
            label="Nome: *"
            id="firstName"
            name="firstName"
            autoComplete=""
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder={'Nome'}
            className={'col-6'}
            isInValid={formik.errors.firstName}
            isValid={formik.values.firstName ? 0 : 1}
            isMessageError={formik.errors.firstName}
          />

          <InputDefault
            type="text"
            label="Sobrenome: *"
            id="lastName"
            name="lastName"
            autoComplete=""
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder={'Sobrenome'}
            className={'col-6'}
            isInValid={formik.errors.lastName}
            isValid={formik.values.lastName ? 0 : 1}
            isMessageError={formik.errors.lastName}
          />

          <InputDefault
            type="text"
            label="Data de nascimento: *"
            id="birth"
            name="birth"
            autoComplete=""
            value={maskDateBirth(`${formik.values.birth}`)}
            onChange={formik.handleChange}
            placeholder={'Data de nascimento'}
            className={'col-6'}
            isInValid={formik.errors.birth}
            isValid={formik.values.birth ? 0 : 1}
            isMessageError={formik.errors.birth}
          />

          <InputDefault
            type="text"
            label="CPF: *"
            id="cpf"
            name="cpf"
            autoComplete=""
            value={maskCpf(`${formik.values.cpf}`)}
            onChange={formik.handleChange}
            placeholder={'CPF'}
            className={'col-6'}
            isInValid={formik.errors.cpf}
            isValid={formik.values.cpf ? 0 : 1}
            isMessageError={formik.errors.cpf}
          />

          <InputDefault
            type="telephone"
            label="Telefone: *"
            id="telephone"
            name="telephone"
            autoComplete=""
            value={maskPhone(`${formik.values.telephone}`)}
            onChange={formik.handleChange}
            placeholder={'Telefone'}
            className={'col-6'}
            isInValid={formik.errors.telephone}
            isValid={formik.values.telephone ? 0 : 1}
            isMessageError={formik.errors.telephone}
          />
          <InputDefault
            type="email"
            label="Email: *"
            id="email"
            name="email"
            autoComplete=""
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder={'email@example.com'}
            className={'col-6'}
            isInValid={formik.errors.email}
            isValid={formik.values.email ? 0 : 1}
            isMessageError={formik.errors.email}
          />

          <InputDefault
            type="address"
            label="Endereço: *"
            id="address"
            name="address"
            autoComplete=""
            value={formik.values.address}
            onChange={formik.handleChange}
            placeholder={'Endereço'}
            className={'col-12'}
            isInValid={formik.errors.address}
            isValid={formik.values.address ? 0 : 1}
            isMessageError={formik.errors.address}
          />

          <div className="d-grid gap-2 d-md-block py-3 ">
            {user.id ? (
              <ButtonDefault
                label="Editar"
                className="btn"
                background={'btn-success'}
                color={'text-white'}
                buttonType="submit"
              />
            ) : (
              <ButtonDefault
                label="Salvar"
                className="btn"
                background={'btn-success'}
                color={'text-white'}
                buttonType="submit"
              />
            )}

            <ButtonDefault
              href="/users"
              buttonType="link"
              className="ms-md-3"
              background="btn-danger"
              color="text-white"
              label="Cancelar"
            />
          </div>
        </div>
      </form>
    </LayoutDashboard>
  );
};

export default CreateUserPage;
