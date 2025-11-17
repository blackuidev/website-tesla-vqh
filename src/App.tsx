import React from 'react';
import { Button } from '@/app/component2/ui/button';
import { Card } from '@/app/component2/ui/card';
import { getCurrentTime } from './utils/helpers';

const App: React.FC = () => {
    const [time, setTime] = React.useState<string>(getCurrentTime());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
            <Card className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-2xl max-w-2xl w-full text-center border-t-8 border-primary-blue transition-all duration-500 ease-in-out">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                    website-tesla-vqh 
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-light italic">
                    AI-Generated Project based on: "create an tesla website"
                </p>

                <div className="text-2xl font-mono text-secondary-indigo dark:text-indigo-400 mb-10 p-4 border rounded-lg bg-indigo-50 dark:bg-gray-700 mx-auto max-w-xs">
                    Time: <span className="font-bold">{time}</span>
                </div>

                <div className="flex justify-center space-x-6">
                    <Button onClick={() => console.log('Primary Action Clicked')}>
                        Primary Action
                    </Button>
                    <Button variant="secondary" onClick={() => console.log('Secondary Action Clicked')}>
                        Secondary Action
                    </Button>
                </div>
                
                <p className="mt-10 text-sm text-gray-400">
                    Deployed via Vercel and GitHub Template API.
                </p>
            </Card>
        </div>
    );
};

export default App;
