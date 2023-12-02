import React from "react";

const IsMan = ({isMan}) => {
  const genderMan = 'man'
  const genderWoman = 'woman'
  return <div>My gender is {isMan ? genderMan : genderWoman}.</div>
}
export default IsMan;