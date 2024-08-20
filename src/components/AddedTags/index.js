import {
  AddedTagsContainer,
  TagsContainer,
  TagsTitle,
  TagButtonsUl,
  TagButton,
  TagButtonli,
  TagsAddedList,
  AddedTagLi,
  AddedTagTask,
  AddedTag,
  NoTasksFoundContainer,
} from './styledComponents'

import './index.css'

const AddedTags = props => {
  const {tagsList, tasksList, updateActiveTag, activeTag} = props

  return (
    <>
      <AddedTagsContainer>
        <TagsContainer>
          <TagsTitle>Tags</TagsTitle>

          <TagButtonsUl>
            {tagsList.map(eachButton => (
              <TagButtonli key={eachButton.optionId}>
                <TagButton
                  type="button"
                  onClick={() => updateActiveTag(eachButton.optionId)}
                  value={eachButton.optionId}
                  isActive={activeTag === eachButton.optionId}
                >
                  {eachButton.displayText}
                </TagButton>
              </TagButtonli>
            ))}
          </TagButtonsUl>
        </TagsContainer>
        <h1 className="tasks-title">Tasks</h1>
        {tasksList.length !== 0 ? (
          <TagsAddedList>
            {tasksList.map(eachTask => (
              <AddedTagLi>
                <AddedTagTask>{eachTask.task}</AddedTagTask>
                <AddedTag>{eachTask.tag}</AddedTag>
              </AddedTagLi>
            ))}
          </TagsAddedList>
        ) : (
          <NoTasksFoundContainer>
            <p className="no-tasks-found-title">No Tasks Added Yet</p>
          </NoTasksFoundContainer>
        )}
      </AddedTagsContainer>
    </>
  )
}

export default AddedTags
