import { InjectionToken } from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
    mediums: ['Movie', 'Series'],
    categories: ['Action', 'Comedy', 'Science Fiction', 'Horror']
};