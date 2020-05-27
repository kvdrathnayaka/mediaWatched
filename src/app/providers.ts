import { InjectionToken } from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
    mediums: ['Action', 'Comedy', 'Science Fiction', 'Horror'],
    categories: ['Movie', 'Series']
};