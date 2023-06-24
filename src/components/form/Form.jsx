import React, { useEffect } from 'react';
import {
  Form, Checkbox, Button, Input, notification,
} from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './Form.module.scss';

const filterData = (data) => {
  const {
    drink, food, music, comment,
  } = data;
  return {
    drink, food, music, comment,
  };
};

export default function MyForm({ formRef }) {
  const { id } = useParams();

  const [form] = Form.useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/${id}`);
        const filteredData = filterData(response.data);
        form.setFieldsValue(filteredData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id, form]); // Добавьте `form` в зависимости useEffect

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:5002/${id}`, values);
      notification.success({
        message: 'Спасибо',
        description: 'Данные успешно сохранены!',
        placement: 'bottomRight',
      });
    } catch (error) {
      console.error(error);
      notification.error({
        message: 'Что-то пошло не так',
        description: 'Попробуйте еще раз',
        placement: 'bottomRight',
      });
    }
  };

  return (
    <div
      className={styles.myForm}
      ref={formRef}
    >
      <Form form={form} name="myForm" layout="vertical" onFinish={onFinish}>
        <p>Что предпочитаете на горячее?</p>
        <Form.Item name="food">
          <Checkbox.Group direction="vertical">
            <Checkbox value="beef">Телятина</Checkbox>
            <Checkbox value="chicken">Птица</Checkbox>
            <Checkbox value="fish">Рыба</Checkbox>
            <Checkbox value="vegetable">Овощи</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <p>Что предпочитаете из горячительного?</p>
        <Form.Item name="drink">
          <Checkbox.Group direction="vertical">
            <Checkbox value="champagne">Игристое</Checkbox>
            <Checkbox value="wineWhite">Вино белое</Checkbox>
            <Checkbox value="wineRed">Вино красное</Checkbox>
            <Checkbox value="cognac">Коньяк</Checkbox>
            <Checkbox value="wisky">Виски</Checkbox>
            <Checkbox value="beer">Пиво</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <p>Любимая песня/исполнитель</p>
        <Form.Item name="music">
          <Input placeholder="Input field 1" />
        </Form.Item>

        <p>Дополнительная информация</p>
        <Form.Item name="comment">
          <Input placeholder="Input field 2" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
