import * as APIUtil from '../util/discussion_api_util';

export const RECEIVE_DISCUSSIONS = "RECEIVE_DISCUSSIONS";
export const RECEIVE_NEW_DISCUSSIONMESSAGE = "RECEIVE_NEW_DISCUSSIONMESSAGE";

export const receiveDiscussions = discussions => ({
    type: RECEIVE_DISCUSSIONS,
    discussions
});

export const receiveNewDiscussionMessage = discussionmessage => ({
    type: RECEIVE_NEW_DISCUSSIONMESSAGE,
    discussionmessage
})

export const fetchDiscussions = (messageID) => dispatch => (
    APIUtil.getDiscussions(messageID)
        .then(discussions => dispatch(receiveDiscussions(discussions)))
        .catch(err => console.log(err))
);

export const composeDiscussionMessage = data => dispatch => (
    APIUtil.writeDiscussion(data)
      .then(discussionmessage => dispatch(receiveNewDiscussionMessage(discussionmessage)))
      .catch(err => console.log(err))
  );