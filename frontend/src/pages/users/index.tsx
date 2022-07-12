import { useFormik } from 'formik';

import { LayoutDashboard } from '@/components/LayoutDashboard';
import { MainHeaderDashboard } from '@/components/LayoutDashboard/MainHeaderDashboard';
import Link from 'next/link';
import { FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { Form, Table, Input, Row, Col, Space, Button, Modal } from 'antd';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { User } from '@/types/user/User';
import { useUserFindAll } from 'hooks/users/useUserFindAll';
import Column from 'antd/lib/table/Column';

type UserFilterForm = {
  name?: string;
  cpf?: string;
};

type DataType = {
  id: number;
  firstName: string;
  lastName: string;
  birth: string;
  cpf: string;
  telephone: string;
  email: string;
  address: string;
};

const Users: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [user, setUser] = useState<DataType | null>();
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onAddUser = () => {
    const newUser = {
      id: 1,
      firstName: 'John',
      lastName: 'david',
      cpf: '',
      telephone: '',
      birth: '118/05/1919',
      email: 'email@email.com',
      address: 'Rua flavio Ribeiro, 192, Centro, Belém-PB',
    };
    setData((pre) => {
      return [...pre, newUser];
    });
  };

  const onDeleteUser = (user: DataType) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete user record?',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        setData((pre) => {
          console.log(pre);
          return pre.filter((data) => data.id !== user.id);
        });
        console.log('Click');
      },
    });
  };

  const onEditUser = (user: DataType) => {
    setIsOpenModalEdit(true);
    setUser({ ...user });
  };

  useEffect(() => {
    setLoading(true);
    useUserFindAll()
      .then((response) => {
        setData(response.data.content);
        // console.log('Users: ', response.data);
      })
      .catch((error) => {
        setLoading(false);
        setData([]);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        // console.log('False');
      });
  }, []);

  const handleOnSubmit = (filter: UserFilterForm) => {
    console.log('Filter: ', filter);
  };

  const resetEditModal = () => {
    setIsOpenModalEdit(false);
    setUser(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log('Name: ', name, 'Value: ', value);
    setUser((pre) => {
      console.log('PRE: ', pre);
      if (pre) {
        return { ...pre, name: value };
      }
    });
  };

  return (
    <>
      <LayoutDashboard title="Users">
        <MainHeaderDashboard title="List Users" />
        <Link href="/users/create">
          <a className="btn btn-primary text-white mb-2">
            <FaPlus />
          </a>
        </Link>
        <h1>Users</h1>
        {/* <Row gutter={10}>
          <Col span={12}>
            <Form.Item>
              <Input placeholder="Digíte um nome" value={values.name} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Input placeholder="Digíte um CPF" value={values.cpf} onChange={handleChange} />
            </Form.Item>
          </Col>
        </Row>
        <Form onSubmitCapture={handleSubmit} layout={'inline'}></Form> */}

        <>
          <Table dataSource={data} rowKey={'code'} loading={loading}>
            <Column title="Id" dataIndex="id" key="id" />
            <Column
              title="Nome"
              dataIndex="firstName"
              key="firstName"
              sorter={(a: any, b: any) => a.firstName.length - b.firstName.length}
              sortDirections={['descend']}
            />
            <Column title="Data Nascimento" dataIndex="birth" key="birth" />
            <Column title="Email" dataIndex="email" key="email" />

            <Column title="Endereço" dataIndex="address" key="address" />

            <Column
              title="Action"
              key="action"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  {/* <Link href={`/users/update/${record.id}`}>
                    <Button type="link">
                      <FaRegEdit />
                    </Button>
                  </Link>
                  <Link href={`/users/delete/${record.id}`}>
                    <Button type="link" danger>
                      <FaRegTrashAlt />
                    </Button>
                  </Link> */}
                  <FaRegEdit
                    onClick={() => {
                      onEditUser(record);
                    }}
                  />
                  <FaRegTrashAlt
                    onClick={() => {
                      onDeleteUser(record);
                    }}
                    style={{ color: 'red', marginLeft: 12 }}
                  />
                </Space>
              )}
            />
          </Table>
        </>

        {/* {!loading && data.length === 0 && <div>Não há posts</div>} */}

        <Modal
          title="Edit User"
          okText="Save"
          okType="primary"
          visible={isOpenModalEdit}
          onCancel={() => {
            resetEditModal();
          }}
          onOk={() => {
            setData((pre) => {
              return pre.map((result) => {
                if (result.id === user?.id) {
                  return user;
                }
              });
            });
            resetEditModal();
          }}
        >
          <Form.Item>
            <Input
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUser((pre) => {
                  if (pre) {
                    return { ...pre, firstName: e.target.value };
                  }
                });
              }}
              value={user?.firstName}
            />
          </Form.Item>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUser((pre) => {
                if (pre) {
                  return { ...pre, lastName: e.target.value };
                }
              });
            }}
            value={user?.lastName}
          />
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUser((pre) => {
                if (pre) {
                  return { ...pre, cpf: e.target.value };
                }
              });
            }}
            value={user?.cpf}
          />
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUser((pre) => {
                if (pre) {
                  return { ...pre, birth: e.target.value };
                }
              });
            }}
            value={user?.birth}
          />
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUser((pre) => {
                if (pre) {
                  return { ...pre, email: e.target.value };
                }
              });
            }}
            value={user?.email}
          />
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUser((pre) => {
                if (pre) {
                  return { ...pre, telephone: e.target.value };
                }
              });
            }}
            value={user?.telephone}
          />
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUser((pre) => {
                if (pre) {
                  return { ...pre, address: e.target.value };
                }
              });
            }}
            value={user?.address}
          />
        </Modal>
      </LayoutDashboard>
    </>
  );
};

export default Users;
