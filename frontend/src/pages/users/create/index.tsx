import { useState } from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';

import { LayoutDashboard } from '@/components/LayoutDashboard';
import { MainHeaderDashboard } from '@/components/LayoutDashboard/MainHeaderDashboard';

import { User } from '@/types/user';
import { FaChevronLeft } from 'react-icons/fa';
import { InputDefault } from '@/common/InputDefault';
import { ButtonDefault } from '@/common/ButtonDefault';
import { randomString } from 'app/utils/random';
import { maskCpf, maskDateBirth, maskPhone, maskToLowerCase, maskToUpperCase } from 'app/utils/mask';
import { useCreateUserService } from '@/services/user/create.service';
import { useUpdateUserService } from '@/services/user/update.service';

type CreateUserPageProps = {
  user: User;
  onSubmit: (user: User) => void;
};

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

const CreateUserPage: React.FC = () => {
  const [user, setUser] = useState<User>({});

  const onSubmit = (user: User) => {
    if (user.id) {
      useUpdateUserService(user);
      console.log('User: ', user);
      console.log('User Formik: ', user);
    } else {
      useCreateUserService(user);
      console.log('User: ', user);
      console.log('User Formik: ', user);
    }
  };

  const formik = useFormik<User>({
    initialValues: { ...formScheme, ...user },
    onSubmit,
    enableReinitialize: true,
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
      <form onSubmit={formik.handleSubmit}>
        <div className="row text-secondary">
          {user.id && (
            <>
              <InputDefault type="text" id="id" value={formik.values.id} className={'col-6'} isDisabled />

              <InputDefault type="text" id="createdAt" value={formik.values.createdAt} className={'col-6'} isDisabled />
            </>
          )}

          {/* <InputDefault
            type="text"
            label="CÒDIGO: *"
            placeholder={'Código'}
            id="code"
            name="code"
            autoComplete="off"
            // onChange={formik.handleChange}
            value={formik.values.code}
            className={'col-12'}
            isDisabled
          /> */}

          <InputDefault
            type="text"
            label="Nome: *"
            id="firstName"
            name="firstName"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder={'Nome'}
            className={'col-6'}
          />

          <InputDefault
            type="text"
            label="Sobrenome: *"
            id="lastName"
            name="lastName"
            autoComplete="off"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            placeholder={'Sobrenome'}
            className={'col-6'}
          />

          <InputDefault
            type="text"
            label="Data de nascimento: *"
            id="birth"
            name="birth"
            autoComplete="off"
            value={maskDateBirth(`${formik.values.birth}`)}
            onChange={formik.handleChange}
            placeholder={'Data de nascimento'}
            className={'col-6'}
          />

          <InputDefault
            type="text"
            label="CPF: *"
            id="cpf"
            name="cpf"
            autoComplete="off"
            value={maskCpf(`${formik.values.cpf}`)}
            onChange={formik.handleChange}
            placeholder={'CPF'}
            className={'col-6'}
          />

          <InputDefault
            type="telephone"
            label="Telefone: *"
            id="telephone"
            name="telephone"
            autoComplete="off"
            value={maskPhone(`${formik.values.telephone}`)}
            onChange={formik.handleChange}
            placeholder={'Telefone'}
            className={'col-6'}
          />
          <InputDefault
            type="email"
            label="Email: *"
            id="email"
            name="email"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder={'email@example.com'}
            className={'col-6'}
          />

          <InputDefault
            type="address"
            label="Endereço: *"
            id="address"
            name="address"
            autoComplete="off"
            value={formik.values.address}
            onChange={formik.handleChange}
            placeholder={'Endereço'}
            className={'col-12'}
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
