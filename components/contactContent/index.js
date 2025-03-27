const ContactContent = () => {
    return (
        <>
            <main className="container bg-body-secondary p-5 mt-5 rounded-4 d-flex justify-content-center align-items-center" style={{ minHeight: "75vh" }}>
                <article className="row w-100">
                    <div className="text-center">
                        <i className="bi bi-envelope gradient-text fw-bold"></i>
                        <h1>Prendre contact</h1>
                        <p><small className="text-body-secondary">Travaillons ensemble !</small></p>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="exampleInputText" placeholder="Nom" required />
                            </div> 
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email" required />
                            </div>
                            <div className="mb-3">
                                <input type="tel" className="form-control" id="exampleInputTel" placeholder="Numéro de téléphone" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Submit</button>
                        </form>
                    </div>
                </article>
            </main>
        </>
    );
}

export default ContactContent;