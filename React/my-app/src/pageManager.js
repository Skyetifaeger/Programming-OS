import React from "react";
import './App.css';
import { Counter } from './Counter';
import { Accordion } from './Accordion';
import { Input } from './input';
import { MoviesList } from './Movies/moviesList';

export function PageManager({ issudoToggled, setsudoToggled }) {
    return (
        <div class="pageManager">
            <button
                style={{ fontSize: '20px' }}
                onClick={() => {
                    if (issudoToggled === 4) {
                        setsudoToggled(1);
                    } else { setsudoToggled(issudoToggled + 1); }
                }}
            >Content Switcher</button>
            <div class="render">
                {issudoToggled === 1 ?
                    <Counter />
                    : issudoToggled === 2 ?
                        <Accordion />
                        : issudoToggled === 3 ?
                            <Input />
                            : <MoviesList />
                }
            </div>
        </div>
    )
}