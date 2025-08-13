import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section class="hero-section">
        <div class="container text-center">
            <h1 class="display-4 fw-bold mb-4">Точное извлечение текста из сложных PDF</h1>
            <p class="lead mb-5">Ваш PDF останется исходным — мы только достанем из него текст, даже если другие OCR не видят его</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3" data-bs-toggle="modal" data-bs-target="#demoModal">Попробовать</button>
            </div>
        </div>
    </section>
  );
}