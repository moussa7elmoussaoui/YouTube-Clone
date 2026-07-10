const previews = [
  {
    title: 'Talking Tech and AI with Google CEO Sundar Pichai!',
    link: 'https://www.youtube.com/watch?v=n2RNcPRtAiY',
    duration: 860,
    views: 4386677,
    uploadTime: new Date('2021-05-21'),
    channel: {
      name: 'Marques Brownlee',
      link: 'https://www.youtube.com/@mkbhd',
    },
  },
  {
    title: 'Try Not To Laugh Challenge #9',
    link: 'https://www.youtube.com/watch?v=mP0RAo9SKZk',
    duration: 502,
    views: 21819849,
    uploadTime: new Date('2017-09-16'),
    channel: {
      name: 'Markiplier',
      link: 'https://www.youtube.com/@markiplier',
    },
  },
  {
    title: 'I Spent 1 Year in VR REALISTIC MINECRAFT',
    link: 'https://www.youtube.com/watch?v=l0TIR2FQ6uU',
    duration: 11110,
    views: 1672597,
    uploadTime: new Date('2026-02-22'),
    channel: {
      name: 'Forge Labs',
      link: 'https://www.youtube.com/@ForgeLabs',
    },
  },
  {
    title: 'The Simplest Math Problem No One Can Solve - Collatz Conjecture',
    link: 'https://www.youtube.com/watch?v=094y1Z2wpJg',
    duration: 1329,
    views: 46066684,
    uploadTime: new Date('2021-07-30'),
    channel: {
      name: 'Veritasium',
      link: 'https://www.youtube.com/@veritasium',
    },
  },
  {
    title: 'Kadane\'s Algorithm to Maximum Sum Subarray Problem',
    link: 'https://www.youtube.com/watch?v=86CQq3pKSUw',
    duration: 676,
    views: 774530,
    uploadTime: new Date('2016-03-10'),
    channel: {
      name: 'CS Dojo',
      link: 'https://www.youtube.com/@CSDojo',
    },
  },
  {
    title: 'Anything You Can Fit In The Circle I\'ll Pay For',
    link: 'https://www.youtube.com/watch?v=yXWw0_UfSFg',
    duration: 1199,
    views: 341197735,
    uploadTime: new Date('2020-03-07'),
    channel: {
      name: 'MrBeast',
      link: 'https://www.youtube.com/@MrBeast',
    },
  },
  {
    title: 'Why Planes Don\'t Fly Over Tibet',
    link: 'https://www.youtube.com/watch?v=fNVa1qMbF9Y',
    duration: 613,
    views: 8465547,
    uploadTime: new Date('2020-09-15'),
    channel: {
      name: 'RealLifeLore',
      link: 'https://www.youtube.com/@RealLifeLore',
    },
  },
  {
    title: 'Inside The World\'s Biggest Passenger Plane',
    link: 'https://www.youtube.com/watch?v=lFm4EM1juls',
    duration: 432,
    views: 10010506,
    uploadTime: new Date('2021-01-29'),
    channel: {
      name: 'VISION',
      link: 'https://www.youtube.com/@adin',
    },
  },
  {
    title: 'The SECRET to Super Human STRENGTH',
    link: 'https://www.youtube.com/watch?v=ixmxOlcrlUc',
    duration: 797,
    views: 24462889,
    uploadTime: new Date('2018-04-02'),
    channel: {
      name: 'THENX',
      link: 'https://www.youtube.com/@OFFICIALTHENXSTUDIOS',
    },
  },
  {
    title: 'How The World\'s Largest Cruise Ship Makes 30,000 Meals Every Day',
    link: 'https://www.youtube.com/watch?v=R2vXbFp5C9o',
    duration: 473,
    views: 22798590,
    uploadTime: new Date('2020-01-18'),
    channel: {
      name: 'Business Insider',
      link: 'https://www.youtube.com/channel/UCcyq283he07B7_KUX07mmtA',
    },
  },
  {
    title: 'Dubai\'s Crazy Underwater Train and Other Things #Only in Dubai',
    link: 'https://www.youtube.com/watch?v=0nZuYyXET3s',
    duration: 250,
    views: 4786172,
    uploadTime: new Date('2020-07-14'),
    channel: {
      name: 'Destination Tips',
      link: 'https://www.youtube.com/@Destinationtips',
    },
  },
  {
    title: 'What would happen if you didn\'t drink water? - Mia Nacamulli',
    link: 'https://www.youtube.com/watch?v=9iMGFqMmUFs',
    duration: 291,
    views: 23518544,
    uploadTime: new Date('2016-03-29'),
    channel: {
      name: 'TED-Ed',
      link: 'https://www.youtube.com/@TEDEd',
    },
  },
];

previews.forEach((preview, i) => {
  preview.thumbnail = `/thumbnails/thumbnail-${i}.webp`;
  preview.channel.icon = `/icons/channels-${i}.jpeg`;
});

export default previews;