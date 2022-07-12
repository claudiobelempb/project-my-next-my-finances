import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import { LayoutDashboard } from '@/components/LayoutDashboard';
import { MainHeaderDashboard } from '@/components/LayoutDashboard/MainHeaderDashboard';

import { User } from '@/types/user/User';
import { FaChevronLeft } from 'react-icons/fa';
import { useUpdateUserService } from '@/services/user/update.service';
import { useRouter } from 'next/router';
import { useFindByIdUseService } from '@/services/user/findById.service';
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import { useForm } from 'react-hook-form';
import { FIELD_MESSAGE, FIELD_MESSAGE_EMAIL } from '../../../../app/contants';
import { useUserFindById } from 'hooks/users/useUserFindByid';
import axios from 'axios';

type TypeFormInput = {
  id: string;
  firstName: string;
  lastName: string;
  birth: string;
  cpf: string;
  email: string;
  address: string;
  password: string;
  telephone: string;
  createdAt: string;
};

const UpdateUserPage: React.FC = () => {
  const [user, setUser] = useState<TypeFormInput>();
  const [redirect, setRedirect] = useState<boolean>(false);

  const { register, getValues } = useForm<TypeFormInput>();

  const router = useRouter();
  const { id } = router.query;

  const onSubmit = () => {
    useUpdateUserService(`${id}`, user!)
      .then((response) => {
        console.log('Update response: ', response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinish = (values: TypeFormInput) => {
    const newValue = values;

    console.log('Success:', user);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((pre) => {
      if (pre) {
        return { ...pre, [name]: value };
      }
    });
  };

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get<TypeFormInput>(`http://localhost:8080/api/users/1`);
        console.log(result.data);
        setUser(result.data);
      } catch (error) {
        setRedirect(true);
      }
    })();
  }, [id]);

  return (
    <LayoutDashboard title="Update User">
      <MainHeaderDashboard title="Update User" />
      <Link href="/users">
        <a className="btn btn-primary text-white mb-2">
          <FaChevronLeft />
        </a>
      </Link>
      <h2 className="text-secondary">Update User</h2>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} layout={'vertical'} autoComplete="off">
        <Row gutter={4}>
          <Col span={12}>
            <pre>ID: {user?.id}</pre>
          </Col>
          <Col span={12}>
            <pre>Data Cadastro: {user?.createdAt}</pre>
          </Col>
        </Row>

        <Row gutter={4}>
          <Col span={12}>
            <Form.Item label="Nome">
              <Input name={'firstName'} type={'text'} onChange={handleChange} value={user?.firstName} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Sobrenome:">
              <Input name={'lastName'} type={'text'} onChange={handleChange} value={user?.lastName} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={4}>
          <Col span={12}>
            <Form.Item label="Data de nascimento:">
              <Input name={'birth'} type={'date'} onChange={handleChange} value={user?.birth} />
              <DatePicker picker="date" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="CPF:">
              <Input name={'cpf'} type={'text'} onChange={handleChange} value={user?.cpf} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={4}>
          <Col span={12}>
            <Form.Item label="Email:">
              <Input name={'email'} type={'text'} onChange={handleChange} value={user?.email} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Telefone:">
              <Input name={'telephone'} type={'tel'} onChange={handleChange} value={user?.telephone} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Endereço:">
          <Input name={'address'} type={'text'} onChange={handleChange} value={user?.address} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Editar
          </Button>
          <Button href="/users" className="ms-md-3" color="text-white" type="primary" danger>
            Cancelar
          </Button>
        </Form.Item>
      </Form>
    </LayoutDashboard>
  );
};

export default UpdateUserPage;
