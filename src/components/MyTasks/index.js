import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  MyTasksContainer,
  MyTasksFormContainer,
  FormContent,
  FormTitle,
  TaskInput,
  TaskInputContainer,
  InputLabel,
  TaskSelect,
  OptionItem,
  FormButton,
} from './styledComponents'

import AddedTags from '../AddedTags'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    inputText: '',
    inputTag: tagsList[0].optionId,
    tasksList: [],
    activeTag: 'INITIAL',

    isEmpty: false,
  }

  onChangeTag = event => {
    this.setState({inputTag: event.target.value})
  }
  onChangeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onAddTask = event => {
    event.preventDefault()

    const {inputText, inputTag} = this.state

    if (inputText.length !== 0) {
      const newTask = {
        id: uuidv4(),
        task: inputText,
        tag: inputTag,
      }

      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newTask],
        inputText: '',
        inputTag: tagsList[0].optionId,
        isEmpty: false,
      }))
    } else {
      this.setState({
        isEmpty: true,
      })
    }
  }

  updateActiveTag = optionId => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === optionId ? 'INITIAL' : optionId,
    }))
  }

  getFilteredTasks = () => {
    const {tasksList, activeTag} = this.state
    if (activeTag === 'INITIAL') {
      return tasksList
    }
    return tasksList.filter(task => task.tag === activeTag)
  }

  render() {
    const {inputTag, inputText, activeTag, isEmpty} = this.state

    const filteredTasks = this.getFilteredTasks()

    return (
      <MyTasksContainer>
        <MyTasksFormContainer>
          <FormTitle>Create a task!</FormTitle>
          <FormContent onSubmit={this.onAddTask}>
            <TaskInputContainer>
              <InputLabel htmlFor="taskInput">Task</InputLabel>
              <TaskInput
                id="taskInput"
                type="text"
                placeholder="Enter the task here"
                value={inputText}
                onChange={this.onChangeInputText}
              />
              {isEmpty ? <p className="error-msg">Task</p> : null}
            </TaskInputContainer>
            <TaskInputContainer>
              <InputLabel htmlFor="taskSelect">Tags</InputLabel>
              <TaskSelect
                id="taskSelect"
                onChange={this.onChangeTag}
                value={inputTag}
              >
                {tagsList.map(eachTag => (
                  <OptionItem value={eachTag.optionId} key={eachTag.optionId}>
                    {eachTag.displayText}
                  </OptionItem>
                ))}
              </TaskSelect>
            </TaskInputContainer>
            <FormButton type="submit">Add Task</FormButton>
          </FormContent>
        </MyTasksFormContainer>
        <AddedTags
          tagsList={tagsList}
          tasksList={filteredTasks}
          updateActiveTag={this.updateActiveTag}
          activeTag={activeTag}
        />
      </MyTasksContainer>
    )
  }
}
export default MyTasks
