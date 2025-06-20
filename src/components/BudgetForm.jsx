import { useState } from 'react'
import ResultCard from './ResultCard'

export default function BudgetForm() {
  const [strategy, setStrategy] = useState('50-30-20')
  const [income, setIncome] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const incomeValue = parseFloat(income)
    if (isNaN(incomeValue) || incomeValue <= 0) {
      alert('Insira um valor válido.')
      return
    }

    let categorias = []

    if (strategy === '50-30-20') {
      categorias = [
        { nome: 'Necessidades (50%)', valor: incomeValue * 0.5, dica: 'Aluguel, alimentação, transporte.' },
        { nome: 'Desejos (30%)', valor: incomeValue * 0.3, dica: 'Lazer, compras, viagens.' },
        { nome: 'Poupança (20%)', valor: incomeValue * 0.2, dica: 'Reserva de emergência e investimentos.' },
      ]
    } else {
      categorias = [
        { nome: 'Gasto Geral (70%)', valor: incomeValue * 0.7, dica: 'Despesas fixas + lazer.' },
        { nome: 'Investimentos (15%)', valor: incomeValue * 0.15, dica: 'Aplicações e reserva.' },
        { nome: 'Grandes Objetivos (15%)', valor: incomeValue * 0.15, dica: 'Casa, carro, intercâmbio.' },
      ]
    }

    setResults(categorias)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Estratégia:
          <select value={strategy} onChange={(e) => setStrategy(e.target.value)}>
            <option value="50-30-20">50/30/20 (Equilíbrio)</option>
            <option value="70-15-15">70/15/15 (Prática)</option>
          </select>
        </label>

        <label>
          Renda mensal (R$):
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Ex: 5000"
          />
        </label>

        <button type="submit">Calcular</button>
      </form>

      {results.length > 0 && (
        <div className="results">
          {results.map((cat, idx) => (
            <ResultCard key={idx} categoria={cat} index={idx} />
          ))}
        </div>
      )}
    </>
  )
}
