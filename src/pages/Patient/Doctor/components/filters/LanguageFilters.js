import React, { useState } from 'react'
import { languagesList } from '../../../../../constants/extra';

function LanguageFilters({ onLanguageCheckboxChanged }) {

    const [seeMore, setSeeMore] = useState(false);

    const list = seeMore ? languagesList : languagesList?.slice(0, 5);

    const href = "";

    return (
        <div class="custom-checkbox">
            <a data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">
                Language <i class="fa fa-angle-down float-right"></i>
            </a>
            <div class="collapse show" id="collapseExample2">
                {list.map(lang => (
                    <div class="form-group form-check">
                        <input type="checkbox" onChange={onLanguageCheckboxChanged.bind(this, lang)} class="form-check-input" id={lang} />
                        <label class="form-check-label" for={lang}>{lang}</label>
                    </div>
                ))}
                {seeMore ? (
                    <a style={{ color: 'blue' }} href={href} onClick={(e) => {e.preventDefault(); setSeeMore(false)}}>Show Less...</a>
                ): (
                    <a style={{ color: 'blue' }} href={href} onClick={(e) => {e.preventDefault(); setSeeMore(true)}}>See More...</a>
                )}
            </div>
        </div>
    )
}

export default LanguageFilters
