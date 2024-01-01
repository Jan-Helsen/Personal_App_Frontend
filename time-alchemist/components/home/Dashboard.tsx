import HomeDeadlines from '@/components/home/HomeDeadlines';
import HomeTodos from '@/components/home/HomeTodos';
import HomeHabits from '@/components/home/HomeHabits';
import HomeEvents from '@/components/home/HomeEvents';
import { User } from '@/types';

type Props = {
    user: User;
}

const Dashboard: React.FC<Props> = (props: Props) => {

    const { user } = props;

    return (
        <div className="min-h-[85%] w-[100%] pb-2 grid grid-cols-2 grid-rows-3 gap-4 items-center justify-items-center">
			<HomeDeadlines deadlinez={user.deadlines}/>
			<HomeTodos todoz={user.todos} />
		    <HomeHabits habitz={user.habits} />
			<HomeEvents events={user.events} />
		</div>
    )
}

export default Dashboard;