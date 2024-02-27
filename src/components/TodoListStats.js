import React from 'react'
import { todoListStatState } from '../todoAtoms'
import { useRecoilValue } from 'recoil';

const TodoListStats = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted
  } = useRecoilValue(todoListStatState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100) + '%';

  return (
    <ul>
      <li>Total items : {totalNum}</li>
      <li>Total completed : {totalCompletedNum}</li>
      <li>Total not completed : {totalUncompletedNum}</li>
      <li>Percent completed : {formattedPercentCompleted}</li>
    </ul>
    
  )
}


export default TodoListStats