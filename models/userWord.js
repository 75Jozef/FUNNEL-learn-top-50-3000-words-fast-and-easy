import moment from 'moment';

class userWord {
  constructor(
    userID,
    wordId,
    word,
    translation,
    association,
    dateAdded,
    userLevel,
    wordLevel,
    flag,
    star
  ) {
    this.userID = userID;
    this.wordId = wordId;
    this.word = word;
    this.translation = translation;
    this.association = association;
    this.dateAdded = dateAdded;
    this.userLevel = userLevel;
    this.wordLevel = wordLevel;
    this.flag = flag;
    this.star = star;
  }

  get readableDate() {
    // return this.date.toLocaleDateString('en-En', {
    //   year: 'numeric',
    //   month: 'long',
    //   day: 'numeric',
    //   hour: '2-digit',
    //   minute: '2-digit',
    // });

    return moment(this.date).format('Do MMM YYYY, HH:mm');
  }
}

export default userWord;
