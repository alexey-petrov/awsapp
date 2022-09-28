import React from 'react';
import * as zustand_middleware from 'zustand/middleware';
import * as zustand from 'zustand';

declare const Shell: React.FunctionComponent<React.PropsWithChildren<{
    title: string;
}>>;

declare const Button: () => JSX.Element;

declare type Store = {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amount: number) => void;
};
declare const useAppShell: zustand.UseBoundStore<Omit<zustand.StoreApi<Store>, "persist"> & {
    persist: {
        setOptions: (options: Partial<zustand_middleware.PersistOptions<Store, Store>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: Store) => void) => () => void;
        onFinishHydration: (fn: (state: Store) => void) => () => void;
        getOptions: () => Partial<zustand_middleware.PersistOptions<Store, Store>>;
    };
}>;

export { Button, Shell, useAppShell };
