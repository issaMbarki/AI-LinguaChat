import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { classNames } from '../utils/classNames';

export const ThemeSwitcher = ({ enabled, setEnabled,show }) => {
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(" bg-gray-400 ml-3 relative  h-[26px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75",
            show?"inline-flex":"sm:inline-flex hidden "
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-6 -right-2' : 'translate-x-0 -left-4'
                    } relative -top-2  flex items-center justify-center pointer-events-none h-[35px] w-[35px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            >
                {enabled ? (
                    <MoonIcon className="h-3/5 w-h-3/5 text-gray-600" />
                ) : (
                    <SunIcon className="h-3/5 w-h-3/5 text-yellow-500" />
                )}
            </span>
        </Switch>
    )
}
