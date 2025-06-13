document.querySelectorAll('input[name="payment"]').forEach(radio => {
  radio.addEventListener('change', function() {
    document.getElementById('creditFields').style.display = 
      this.id === 'credit' ? 'flex' : 'none';
  });
});

// Abrir carrinho
document.querySelector('.fa-shopping-cart').closest('button').addEventListener('click', function() {
  new bootstrap.Modal(document.getElementById('cartModal')).show();
});

document.getElementById('checkoutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Validação dos campos
  const cep = document.querySelector('input[placeholder="00000-000"]').value;
  if (cep.length < 9) {
    alert('CEP inválido!');
    return;
  }
  // Redireciona para página de confirmação
  window.location.href = 'confirmacao.html';
});