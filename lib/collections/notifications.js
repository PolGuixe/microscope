Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: functions(userId, doc, fieldNames) {
    return ownsDocument(userId, doc) && fieldNames.length === 1 && fieldName[0] === 'read';
  }
});

createCommentNotificaction = function(comment){
  var post = Post.findOne(comment.postId);
  if (comment.userId !== post.userId ){
    Notifications.insert({
      userId: post.userId,
      postId: post._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
}