/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react';
import { Form, Checkbox, Button, Input, notification } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from './Form.module.scss';

const filterData = (data) => {
  const { drink, food, music, comment } = data;
  return {
    drink,
    food,
    music,
    comment,
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
    <div className={styles.myForm} ref={formRef}>
      <Form form={form} name="myForm" layout="vertical" onFinish={onFinish}>
        <p className={styles.question_title}>Что предпочитаете на горячее?</p>
        <Form.Item className={styles.food} name="food">
          <Checkbox.Group className={styles.food_group} direction="vertical">
            <Checkbox className={styles.food_element} value="beef">
              Телятина
            </Checkbox>
            <Checkbox className={styles.food_element} value="chicken">
              Птица
            </Checkbox>
            <Checkbox className={styles.food_element} value="fish">
              Рыба
            </Checkbox>
            <Checkbox className={styles.food_element} value="vegetable">
              Овощи
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <p className={styles.question_title}>
          Что предпочитаете из горячительного?
        </p>
        <Form.Item className={styles.drink} name="drink">
          <Checkbox.Group className={styles.drink_group} direction="vertical">
            <Checkbox className={styles.drink_element} value="champagne">
              Игристое
            </Checkbox>
            <Checkbox className={styles.drink_element} value="wineWhite">
              Вино белое
            </Checkbox>
            <Checkbox className={styles.drink_element} value="wineRed">
              Вино красное
            </Checkbox>
            <Checkbox className={styles.drink_element} value="cognac">
              Коньяк
            </Checkbox>
            <Checkbox className={styles.drink_element} value="wisky">
              Виски
            </Checkbox>
            <Checkbox className={styles.drink_element} value="beer">
              Пиво
            </Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <p className={styles.question_title}>Любимая песня/исполнитель</p>
        <Form.Item name="music">
          <Input placeholder="Можно и несколько!" />
        </Form.Item>

        <p className={styles.question_title}>Дополнительная информация</p>
        <Form.Item name="comment">
          <Input.TextArea placeholder="Все что угодно" />
        </Form.Item>
        <Form.Item>
          <Button
            size="large"
            className={styles.buttonSave}
            type="primary"
            htmlType="submit"
          >
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
