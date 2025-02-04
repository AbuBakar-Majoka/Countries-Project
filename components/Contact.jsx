import React from 'react'
import Header from './Header'
import { useParams } from 'react-router'

export default function Contact() {
  const params = useParams();
  console.log(params);
  return (
    <>
    <div>Contact Us</div>
    </>
  )
}
