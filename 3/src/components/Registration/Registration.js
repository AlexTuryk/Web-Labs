import React from 'react'

export default function Main(){
    return(
        <div>
            <div class="row mt-5">
                <div class="col-md-6 m-auto">
                    <div class="card card-body text-center">
                        <img src="/images/logo.jpg" height="500" width="500"/>
                        <p>Сворити акаунт або увійти</p>
                        <a href="/users/register" class="btn btn-primary btn-block mb-2"
                        >Реєстрація</a>
                        <a href="/users/login" class="btn btn-secondary btn-block">Вхід</a>
                    </div>
                </div>
            </div>
        </div>
    )
}