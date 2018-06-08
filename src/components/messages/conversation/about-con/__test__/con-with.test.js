import React from 'react'
import { create } from 'react-test-renderer'
import { Provider } from 'react-redux'
import mockStore from '../../../../../store/mockStore/mockStore'
import { BrowserRouter as Router } from 'react-router-dom'
import ConversationWith from '../con-with'
import Message from '../../../../../store/mockStore/mock-reducers/Message'

describe('ConversationWith Component', () => {
  const comp = (
    <Provider store={mockStore}>
      <Router>
        <ConversationWith/>
      </Router>
    </Provider>
  )

  it('should match snapshot', () => {
    const tree = create(comp).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot when mutualFollowersCount == 0', () => {
    Message.conAbout.mutualFollowersCount = 0
    const tree = create(comp).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
