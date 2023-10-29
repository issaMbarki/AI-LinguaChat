import { CheckIcon, ChevronUpDownIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Listbox, Switch, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg'
const language = [
    { label: 'English', flag: '🇺🇸' },
    { label: 'French', flag: '🇫🇷' },
    { label: 'Germany', flag: '🇩🇪' },
    { label: 'Arabic', flag: '🇦🇪' }
];
export const Header = () => {
    const [enabled, setEnabled] = useState(false);
    const [selected, setSelected] = useState(language[0])
    return (
        <>
            <header className="flex justify-between items-center px-1 shadow-sm">
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className="bg-gray-400 ml-3 relative inline-flex h-[26px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
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
                <div className='flex items-center py-3 gap-1'>
                    <Logo className="" style={{ width: "2rem" }} />
                    <span className='font-bold'>AI LINGUACHAT</span>
                </div>
                <div>
                    <div className=" w-40">
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative">
                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                    <span className="block truncate">{selected.label}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon
                                            className="h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                        {language.map((person, personIdx) => (
                                            <Listbox.Option
                                                key={personIdx}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.label}
                                                        </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
            </header>
        </>
    );
};