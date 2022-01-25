( function() {

    /* ----- Serch -------- */
    const iconSerch = document.querySelector( '.icon__serch' );
    const inputShow = document.querySelector( '.input-show' );

    iconSerch.addEventListener( 'click', ( e ) => {

        if( e.target == iconSerch ) {
            inputShow.classList.toggle( 'nav__input--show' );
        } 

    } );

    window.addEventListener( 'click', (e) => {
        if( e.target !== iconSerch && e.target != inputShow ) {
            inputShow.classList.remove( 'nav__input--show' );
        } 
    } );

    /* ------- Menu --------- */
    const menu = document.querySelector( '.menu' );
    const navMobile = document.querySelector( '.nav__mobile' );
    const mobileWrapper = document.querySelector( '.mobile__wrapper' );

    menu.addEventListener( 'click', () => {
        navMobile.classList.add( 'nav__mobile--show' );
        mobileWrapper.classList.add( 'mobile__wrapper--show' );
    } );

    window.addEventListener( 'click', (e) => {
        if( e.target != menu && e.target !== mobileWrapper ) {
            navMobile.classList.remove( 'nav__mobile--show' );
            mobileWrapper.classList.remove( 'mobile__wrapper--show' );
        } 
    } );


} )();