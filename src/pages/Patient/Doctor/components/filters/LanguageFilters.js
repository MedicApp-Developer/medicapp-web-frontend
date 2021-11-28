import React, { useState } from 'react'
import { languagesList } from '../../../../../constants/extra';

function LanguageFilters({ onLanguageCheckboxChanged, checkedLanguages }) {

    const [search, setSearch] = useState("");
    const [list, setList] = useState(languagesList?.slice(0, 5));

    const href = "";

    const onSearchLanguage = (e) => {
        setSearch(e.target.value);
        setList(languagesList.filter(s => s.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())).slice(0, 5));
    }

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                Language <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse" id="collapseExample2">
                <form className="form-group">
                    <input placeholder="Search Language" type="text" className="form-control" value={search} onChange={onSearchLanguage} />
                </form>
                {list.map((lang, index) => (
                    <div key={index} class="form-group form-check">
                        <input type="checkbox" checked={checkedLanguages.includes(lang)} onChange={onLanguageCheckboxChanged.bind(this, lang)} class="form-check-input" id={lang} />
                        <label class="form-check-label" for={lang}>{lang}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LanguageFilters
