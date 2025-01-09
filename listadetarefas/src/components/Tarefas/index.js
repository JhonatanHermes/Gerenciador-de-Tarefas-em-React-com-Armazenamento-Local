import React from 'react';
import PropTypes from 'prop-types';
import {FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tarefas.css'

export default function Tarefas({tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit
              className="edit"
              onClick={() => handleEdit(index)}
            />
            <FaWindowClose
              className="delete"
              onClick={() => handleDelete(index)}
            />
          </span>
        </li>
      ))}
    </ul>
  )
}

// eslint-disable-next-line react/no-typos
Tarefas.PropTypes = {
  tarefas: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}