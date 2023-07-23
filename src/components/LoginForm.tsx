import { Button, Form, Input } from 'antd'
import React, { FC, useState } from 'react'
import { rules } from './utils/rules'
import {useDispatch} from "react-redux"
import { AuthActionCreators } from './../store/reducers/auth/action-creaters';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

export const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()

    const submit = () => {
        login(username, password)
    }

  return (
    <Form
    onFinish={submit}
    >
      {error && <div style={{color: 'red'}}>
          {error}
        </div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Пожалуйста введите имя пользователя!')]}
      >
      <Input 
        value={username} 
        onChange={e => setUsername(e.target.value)}
      />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Пожалуйста введите пароль!')]}
      >
      <Input 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        type={'password'}
      />
      </Form.Item>
      <Form.Item>
      <Button type="primary" htmlType="submit" loading={isLoading}>
        Войти
      </Button>
    </Form.Item>
    </Form>
  )
}