import React from 'react';
import Notification from './Notification';

const reservedNotifications = [
  {
    id: 1,
    message: '롯데는 극적으로 플레이오프에 진출합니다.',
  },
  {
    id: 2,
    message: '맨체스터 시티는 올해도 EPL 우승을 차지합니다.',
  },
  {
    id: 3,
    message: '맨체스터 유나이티드가 챔스 진출에 실패합니다.',
  },
];

var timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [], // 처음 notifications 빈배열을 넣었다. (초기화)
    };
  }
  componentDidMount() {
    //1초마다 조건식을 실행
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
          // 스테이트를 업데이트 하기위해서 setState 함수를 사용한다.
        });
      } else {
        this.setState({
          notifications: [],
        }); // unmount 로그를 확인하기 위함
        clearInterval(timer);
      }
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.notifications.map((notice) => {
          return (
            <Notification
              key={notice.id}
              id={notice.id}
              message={notice.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
