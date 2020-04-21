import React, { useState } from 'react';

const ChallengeOne = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  });
  const [initials, setInitials] = useState('');

  const divStyle = {
    background:
      'url(https://source.unsplash.com/sydwCr54rf0) no-repeat center bottom/cover'
  };

  const overlay = {
    width: '100%',
    height: '100%',
    padding: '20px',
    background: 'rgba(0,0,0,0.6)'
  };

  const handleSubmit = e => {
    e.preventDefault();
    myFunc(name);
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setName(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const myFunc = newName => {
    //   My Code :(
    var name = newName.firstName + ' ' + newName.lastName;
    var nameSplit = name.split(' ');

    var firstLetterSplit = nameSplit[0].split('').slice(0, 1);
    var secondLetterSplit = nameSplit[1].split('').slice(0, 1);

    var joinLetters = firstLetterSplit
      .concat(secondLetterSplit)
      .join()
      .toUpperCase()
      .replace(',', '.');

    setInitials(joinLetters);

    // console.log(joinLetters);

    // Good Code - Not by me
    // var nameArr = name.split(' ');
    // return (nameArr[0][0] + '.' + nameArr[1][0]).toUpperCase();
  };

  return (
    <div className='container' style={divStyle}>
      <div style={overlay}>
        <h1>Abbreviate a Two Word Name</h1>
        <p>
          Write a function to convert a name into initials. This kata strictly
          takes two words with one space in between them. The output should be
          two capital letters with a dot separating them. <br />
          <br />
          It should look like this: Sam Harris => S.H Patrick Feeney => P.F
        </p>
        {/* <p>{myFunc('Harry Potter')}</p> */}
        <div className='box'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='firstName'
              value={name.firstName}
              onChange={handleChange}
              placeholder='First Name...'
              required
            />
            <input
              type='text'
              name='lastName'
              value={name.lastName}
              onChange={handleChange}
              placeholder='Last Name...'
              required
            />
            <button>GET INITIALS</button>
          </form>
          <div className='results'>
            <h1>{initials ? initials : 'Results'}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeOne;
