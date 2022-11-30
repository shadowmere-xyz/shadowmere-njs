import React, { useEffect, useState } from "react";

export default function HtmlDoc(cssClass: string) {

    useEffect(() => {
    const { bodyClass } = cssClass
    document.querySelector("html")?.classList.add(bodyClass ? 'dark' : '')
    })

    

}