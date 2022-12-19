import React, { memo } from "react"
import PropTypes from "prop-types"
import { CgSearch } from "react-icons/cg"
import styles from "./buscador.module.css"
import { useMemo } from "react"

const Buscador = ({ busca, setBusca }) => {

  const SVG = useMemo(() => <CgSearch />, [])

  return (
    <div className={styles["search-div"]}>
      <input
        className={styles["search-input"]}
        placeholder="Buscar..."
        type="text"
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />
      {SVG}
    </div>
  )
}

Buscador.propTypes = {
  busca: PropTypes.string,
  setBusca: PropTypes.func
}

export default memo(Buscador)