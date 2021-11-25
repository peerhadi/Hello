import Paper from "@mui/material/Paper";
import React from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button'
export default function P() {
  const { id } = useParams();
  return (
    <div className='hado'>
      <textarea></textarea>
      <Button variant='contained' href='/'>Done</Button>
    </div>
  );
}
