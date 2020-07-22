package com.gersgarage.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gersgarage.model.invoice;

@Repository
public interface invoiceRepository extends JpaRepository <invoice, Long>{

}
